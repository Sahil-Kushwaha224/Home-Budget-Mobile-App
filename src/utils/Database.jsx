import SQLite from 'react-native-sqlite-storage';

const TABLE_NAME = 'BudgetItems';

// Open a database
const db = SQLite.openDatabase({ name: 'BudgetDB', location: 'default' }, 
  () => console.log('Database opened successfully'),
  error => console.error('Error opening database:', error)
);

// Create a table
const initDatabase = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ${TABLE_NAME} (Id INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, PlannedAmount REAL, ActualAmount REAL)`,
        [],
        (tx, results) => {
          console.log('Table created successfully');
          resolve(results);
        },
        (error) => {
          console.error('Error creating table:', error);
          reject(error);
        }
      );
    });
  });
};

// Insert data into the table
const insertData = (name, plannedAmount, actualAmount) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ${TABLE_NAME} (Name, PlannedAmount, ActualAmount) VALUES (?, ?, ?)`,
        [name, plannedAmount, actualAmount],
        (tx, results) => {
          console.log('Data inserted successfully');
          resolve(results);
        },
        (error) => {
          console.error('Error inserting data:', error);
          reject(error);
        }
      );
    });
  });
};

// Query data from the table
const getAllItems = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${TABLE_NAME}`,
        [],
        (tx, results) => {
          const rows = results.rows;
          let items = [];
          for (let i = 0; i < rows.length; i++) {
            const { Id, Name, PlannedAmount, ActualAmount } = rows.item(i);
            items.push({ id: Id, name: Name, plannedAmount: PlannedAmount, actualAmount: ActualAmount });
          }
          resolve(items);
        },
        (error) => {
          console.error('Error querying data:', error);
          reject(error);
        }
      );
    });
  });
};


// Delete the items in the table
const deleteAllItems = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM ${TABLE_NAME}`,
        [],
        (tx, results) => {
          console.log('All items deleted successfully');
          resolve(results);
        },
        (error) => {
          console.error('Error deleting items:', error);
          reject(error);
        }
      );
    });
  });
};

export { initDatabase, insertData, getAllItems, deleteAllItems };
