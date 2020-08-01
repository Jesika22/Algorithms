function bounceOff(dummyRect1,dummyRect2) {
    if (dummyRect1.x - dummyRect2.x < dummyRect2.width/2 + dummyRect1.width/2
        && dummyRect2.x - dummyRect1.x < dummyRect2.width/2 + dummyRect1.width/2) {
      dummyRect1.velocityX = dummyRect1.velocityX * (-1);
      dummyRect2.velocityX = dummyRect2.velocityX * (-1);
    }
    if (dummyRect1.y - dummyRect2.y < dummyRect2.height/2 + dummyRect1.height/2
      && dummyRect2.y - dummyRect1.y < dummyRect2.height/2 + dummyRect1.height/2){
      dummyRect1.velocityY = dummyRect1.velocityY * (-1);
      dummyRect2.velocityY = dummyRect2.velocityY * (-1);
    }
}

function isTouching(dummyRect1,dummyRect2){
    if(dummyRect1.x - dummyRect2.x<dummyRect2.width/2+dummyRect1.width/2
        &&dummyRect2.x - dummyRect1.x<dummyRect2.width/2+dummyRect1.width/2
        &&dummyRect1.y - dummyRect2.y < dummyRect2.height/2 + dummyRect1.height/2
    && dummyRect2.y - dummyRect1.y < dummyRect2.height/2 + dummyRect1.height/2){
        return true;
    }

    else{
        return false;
    }
}