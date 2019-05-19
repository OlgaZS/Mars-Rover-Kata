// Rover Object Goes Here
// ======================
var rover = {
  name: "Curiosity",
  direction: 'N', 
  x: 0, 
  y: 0, 
  travelLog: []
};

// =======================

console.log("%cMars Rover Kata  (Olga Zinoveva pre-work)", "Font-size: 12pt");

console.log("-----------------------------------");

console.log('%cCall the function "runCommand(command, rover)", passing the ' + 
            'following parameters: \ncommand - A string with all the commands ' + 
            ' that the rover will follow. \nThese only can be:\n"f" (move forward), ' + 
            '"b" (move backward), "r" (turn right), or "l"(turn left).', "Font-size: 9pt" )

console.log("-----------------------------------");            
console.log('Actual position: [' + rover.x + ',' + rover.y + ']');
// ======================

function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}

/* Takes the rover and change it's direction to turn left. */

function turnLeft(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
  }

  console.log("Turned left! New rover direction: " + rover.direction);
}
 /* Takes the rover and change it's direction to turn right.*/ 
 

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;  
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;        
  }
  console.log("Turned right! New rover direction: " + rover.direction );
}
// Moving Forvard

function moveForward(rover){
  var message = "";
  switch (rover.direction) {
    case 'N':
      if (rover.y == 0) {
        message = "Stop! you are moving out of the grid";
      } else {
        rover.y--;
        rover.travelLog.push([rover.x,rover.y]);
        message = 'Moved forward! New position: [' + rover.x + ',' + rover.y + ']';
      }
      break;
    case 'S':
     if (rover.y >= 9) {
      message = "Stop! you are moving out of the grid";
     }  else {
       rover.y++;
       rover.travelLog.push([rover.x,rover.y]);
       message = 'Moved forward! New position: [' + rover.x + ',' + rover.y + ']';
    }
    break;
    case 'E':
    if (rover.x >= 9) {
      message = "Stop! you are moving out of the grid";
    } else {
      rover.x++;
      rover.travelLog.push([rover.x,rover.y]);
      message = 'Moved forward! New position: [' + rover.x + ',' + rover.y + ']';
    } 
    break;
    case 'W':
    if (rover.x == 0){
      message = "Stop! you are moving out of the grid";
    } else {
      rover.x--;
      rover.travelLog.push([rover.x, rover.y]);
      message = 'Moved forward! New position: [' + rover.x + ',' + rover.y + ']';
    }
    break;
  }
  console.log(message);
 }

// Moving Backward

function moveBackward(rover){
  var message = "";
  switch (rover.direction) {
    case 'N':
      if (rover.y >= 9) {
      message = "Stop! you are moving out of the grid";
    } else {
      rover.y++;
      rover.travelLog.push([rover.x,rover.y]);
      message = 'Moved forward! New position: [' + rover.x + ',' + rover.y + ']';
   } 
    break; 
    case 'S':
    if (rover.y == 0) {
      message = "Stop! you are moving out of the grid";
    } else {
      rover.y--;
      rover.travelLog.push([rover.x,rover.y]);
      message = 'Moved forward! New position: [' + rover.x + ',' + rover.y + ']';
   }  
    break;
    case 'E':
    if (rover.x == 0) {
      message = "Stop! you are moving out of the grid";
    } else {
      rover.x--;
      rover.travelLog.push([rover.x,rover.y]);
      message = 'Moved forward! New position: [' + rover.x + ',' + rover.y + ']';
   }  
    break;
    case 'W':
    if (rover.x >= 9) {
      message = "Stop! you are moving out of the grid";
    } else {
      rover.x++;
      rover.travelLog.push([rover.x,rover.y]);
      message = 'Moved forward! New position: [' + rover.x + ',' + rover.y + ']';
   } 
    break;
  }
  console.log(message);

}


function runCommand(command, rover) {
  console.log('%c\n' + rover.name + '\'s turn!', 'font-size: 12pt');

  for (var i = 0; i < command.length; i++) {
    switch (command[i]) {
      case 'f':
        moveForward(rover);
        break;
      case 'b':
        moveBackward(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
      default: // If the command isn't valid
        console.log('The command "' + command[i] + '" is not valid! ' + 
                    'Only possible "r", "l", "f", and "b"');
        break;
    }
  }

  console.log('%cFinish!\n', 'font-size: 12pt');
  console.log('Actual position: [' + rover.x + ',' + rover.y + ']');
  console.log("Travel log:" );

  for (var i = 0; i < rover.travelLog.length; i++) {

    console.log("[" + rover.travelLog[i] + "]");   
  }         
    
}
