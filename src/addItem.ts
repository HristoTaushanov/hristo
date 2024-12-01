const insertItem = async () => {
    const params = {
      TableName: TABLE_NAME,
      Item: {
        id: `item-${Date.now()}`, // Unique identifier
        timestamp: new Date().toISOString(),
        data: "Sample data", // Replace with actual data
      },
    };
  
    try {
      await dynamoDB.put(params).promise();
      console.log("Item inserted:", params.Item);
    } catch (error) {
      console.error("Error inserting item:", error);
    }
  };