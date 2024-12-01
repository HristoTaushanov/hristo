const startBackgroundProcess = () => {
    console.log("Background process started. Inserting item every 5 minutes...");
    setInterval(insertItem, 5 * 60 * 1000); // Trigger every 5 minutes
  };
  
  // Start the background process
  startBackgroundProcess();