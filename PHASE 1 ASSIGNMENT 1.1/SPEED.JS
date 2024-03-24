function speedDetector(speed) {
    // Check if the speed is less than 70
    if (speed < 70) {
      console.log("Okay");
      return;
    }
  
    // Calculate the number of demerit points
    const demeritPoints = Math.floor((speed - 70) / 5);
  
    // Print the number of demerit points
    console.log(`Points: ${demeritPoints}`);
  
    // Check if the driver's license should be suspended
    if (demeritPoints > 10) {
      console.log("License suspended");
    }
  }
