const mongoose = require('mongoose');

// Replace with your MongoDB Atlas URI (create free at mongodb.com/atlas, allow all IPs 0.0.0.0/0)
const uri = 'mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/aggregationdb?retryWrites=true&amp;w=majority';

async function main() {
  try {
    // Connect to MongoDB
    await mongoose.connect(uri);
    console.log('âœ… Database connection successful');

    // Sales Schema
    const salesSchema = new mongoose.Schema({
      productName: { type: String, required: true },
      category: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true }
    });

    const Sales = mongoose.model('Sales', salesSchema);

    // Drop collection if exists, insert sample data
    await Sales.collection.drop().catch(() => {}); // Ignore if not exists
    const sampleData = [
      // Electronics (4 items)
      { productName: 'iPhone 15', category: 'Electronics', price: 999, quantity: 2 },
      { productName: 'MacBook Pro', category: 'Electronics', price: 1999, quantity: 1 },
      { productName: 'AirPods Pro', category: 'Electronics', price: 249, quantity: 5 },
      { productName: 'iPad Air', category: 'Electronics', price: 599, quantity: 3 },
      // Clothing (3 items)
      { productName: 'T-Shirt', category: 'Clothing', price: 25, quantity: 10 },
      { productName: 'Jeans', category: 'Clothing', price: 89, quantity: 4 },
      { productName: 'Sneakers', category: 'Clothing', price: 149, quantity: 2 },
      // Books (3 items)
      { productName: 'Node.js Guide', category: 'Books', price: 45, quantity: 8 },
      { productName: 'MongoDB Mastery', category: 'Books', price: 60, quantity: 6 },
      { productName: 'JavaScript Advanced', category: 'Books', price: 55, quantity: 7 }
    ];
    await Sales.insertMany(sampleData);
    console.log('âœ… Sample data (10 records) inserted across 3 categories');

    // Step 3.1: $match - Filter Electronics
    console.log('\nðŸ“Š 3.1 $match (category="Electronics"):');
    const matchResults = await Sales.aggregate([
      { $match: { category: 'Electronics' } }
    ]);
    console.log(matchResults);

    // Step 3.2: $group by category, totalRevenue (price*quantity), count
    console.log('\nðŸ“Š 3.2 $group by category:');
    const groupResults = await Sales.aggregate([
      {
        $group: {
          _id: '$category',
          totalRevenue: { $sum: { $multiply: ['$price', '$quantity'] } },
          count: { $sum: 1 }
        }
      }
    ]);
    console.log(groupResults);

    // Step 4.1: $project - restructure with calculated totalAmount
    console.log('\nðŸ“Š 4.1 $match + $group + $project (Electronics only, avgPrice):');
    const projectResults = await Sales.aggregate([
      { $match: { category: 'Electronics' } },
      {
        $group: {
          _id: '$category',
          totalRevenue: { $sum: { $multiply: ['$price', '$quantity'] } },
          count: { $sum: 1 },
          avgPrice: { $avg: '$price' }
        }
      },
      { $project: { category: '$_id', totalRevenue: 1, avgPrice: { $round: ['$avgPrice', 2] }, count: 1 } }
    ]);
    console.log(projectResults);

    // Step 4.2: Add $sort (desc totalRevenue)
    console.log('\nðŸ“Š 4.2 Full with $sort (desc totalRevenue):');
    const sortResults = await Sales.aggregate([
      { $match: { category: { $ne: null } } },
      {
        $group: {
          _id: '$category',
          totalRevenue: { $sum: { $multiply: ['$price', '$quantity'] } },
          count: { $sum: 1 }
        }
      },
      { $sort: { totalRevenue: -1 } }
    ]);
    console.log(sortResults);

    // Step 5.1: Complete pipeline - match Electronics, group by productName, project totalAmount, sort desc
    console.log('\nðŸ† 5.1 Complete Pipeline ($match â†’ $group â†’ $project â†’ $sort):');
    const fullPipeline = await Sales.aggregate([
      { $match: { category: 'Electronics' } }, // Step 3.1
      {
        $group: {
          _id: '$productName',
          totalAmount: { $sum: { $multiply: ['$price', '$quantity'] } },
          count: { $sum: 1 }
        }
      }, // Step 3.2 style
      {
        $project: {
          productName: '$_id',
          totalAmount: 1,
          count: 1
        }
      }, // Step 4.1
      { $sort: { totalAmount: -1 } } // Step 4.2
    ]);
    console.log(fullPipeline);
    console.log('âœ… All aggregation stages executed successfully!');

  } catch (error) {
    console.error('âŒ Error:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('ðŸ”Œ Database connection closed');
  }
}

main();
