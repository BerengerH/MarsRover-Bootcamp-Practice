let rover = {
    direction: ["N", "S", "E", "W"],
    x: 0,
    y: 0,
    travelLog: [],
  };
  
  let currentDirection = rover.direction[0];
  
  
  // ==============================================FUNCTIONS==============================================
  
  function turnLeft(rover) {
    switch (currentDirection) {
      case "N":
         currentDirection = rover.direction[3];
         console.log('turnLeft was called and the rover now faces West!');
        break;
        
      case "S":
         currentDirection = rover.direction[2];
         console.log('turnLeft was called and the rover now faces East!');
        break;
       
      case "E":
         currentDirection = rover.direction[0];
         console.log('turnLeft was called and the rover now faces North!');
        break;
            
      case "W":
         currentDirection = rover.direction[1];
         console.log('turnLeft was called and the rover now faces South!');
        break;
    } 
  }
  
  
  function turnRight(rover) {
    switch (currentDirection) {
      case "N":
         currentDirection = rover.direction[2];
         console.log('turnRight was called and the rover now faces East!');
        break;
        
      case "S":
         currentDirection = rover.direction[3];
         console.log('turnRight was called and the rover now faces West!');
        break;
       
      case "E":
         currentDirection = rover.direction[1];
         console.log('turnRight was called and the rover now faces South!');
        break;
            
      case "W":
         currentDirection = rover.direction[0];
         console.log('turnRight was called and the rover now faces North!');
        break;
    }
  }
  
  
  function moveForward(rover) {
    if(currentDirection === "N" && rover.y !== 0){
        rover.y = rover.y - 1;
        console.log('moveForward was called, the current position is x: ' + rover.x + ' and y: ' + rover.y);
    }
    
    else if(currentDirection === "W" && rover.x !== 0){
        rover.x = rover.x - 1;
        console.log('moveForward was called, the current position is x: ' + rover.x + ' and y: ' + rover.y);    
    }
    
    else if(currentDirection === "S" && rover.x !== 9){
        rover.y = rover.y + 1;
        console.log('moveForward was called, the current position is x: ' + rover.x + ' and y: ' + rover.y);    
    }
    
    else if(currentDirection === "E" && rover.x !== 9){
        rover.x = rover.x + 1;
        console.log('moveForward was called, the current position is x: ' + rover.x + ' and y: ' + rover.y);    
    }
  }
  
  
  function moveBackward(rover) {
    if(currentDirection === "N" && rover.y !== 9){
        rover.y = rover.y + 1;
        console.log('moveBackward was called, the current position is x: ' + rover.x + ' and y: ' + rover.y);
    }
    
    else if(currentDirection === "W" && rover.x !== 9){
        rover.x = rover.x + 1;
        console.log('moveBackward was called, the current position is x: ' + rover.x + ' and y: ' + rover.y);    
    }
    
    else if(currentDirection === "S" && rover.x !== 0){
        rover.y = rover.y - 1;
        console.log('moveBackward was called, the current position is x: ' + rover.x + ' and y: ' + rover.y);    
    }
    
    else if(currentDirection === "E" && rover.x !== 0){
        rover.x = rover.x - 1;
        console.log('moveBackward was called, the current position is x: ' + rover.x + ' and y: ' + rover.y);    
    }
  }
  
  
  function commands(instructions){
    for (let i = 0; i < instructions.length; i++){
      let currentCommand = instructions.slice(i, i+1);
      
        switch (currentCommand) {
      case "f":
         moveForward(rover);
         rover.travelLog.push('x: ' + rover.x + ' and y: ' + rover.y);   
        break;
            
      case "b":
         moveBackward(rover);
         rover.travelLog.push('x: ' + rover.x + ' and y: ' + rover.y);   
        break;          
        
      case "r":
         turnRight(rover);
        break;
       
      case "l":
         turnLeft(rover);
        break;
                  
      default:
        console.log("Please enter a valid command: f, b, r or l.");
        i = instructions.length;
        break;
      }    
    }
  }
  
  // ==============================================FUNCTION CALLS AND CONSOLE LOG==============================================
  
  commands("rffrfflfrbb");
  console.log(rover.travelLog);