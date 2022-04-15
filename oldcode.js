// Color background of Canvas
//ctx.fillStyle = 'rgb(0, 0, 0)';
//ctx.fillRect(0, 0, width, height);

// ctx.fillStyle = 'rgb(255, 0, 0)';
// ctx.fillRect(50, 50, 100, 150);

// ctx.strokeStyle = 'rgb(255, 255, 255)';
// ctx.strokeRect(25, 25, 175, 200);

// Putting our cursor in the center of the canvas
//ctx.translate(width/2, height/2);

// function degToRad(degrees) {
//     return degrees * Math.PI / 180;
//   };
  
//   function rand(min, max) {
//     return Math.floor(Math.random() * (max-min+1)) + (min);
//   }
  
//   let length = 250;
//   let moveOffset = 2;
  
//Cool spiral pattern
//   for (let i = 0; i < length; i++) {
//     ctx.fillStyle = `rgba(${255-length},0,${255-length},0.9)`;
//     ctx.beginPath();
//     ctx.moveTo(moveOffset,moveOffset);
//     ctx.lineTo(moveOffset+length,moveOffset);
//     const triHeight = length/2 * Math.tan(degToRad(60));
//     ctx.lineTo(moveOffset+(length/2),moveOffset+triHeight);
//     ctx.lineTo(moveOffset,moveOffset);
//     ctx.fill();
    
//     length--;
//     moveOffset += 0.7;
//     ctx.rotate(degToRad(5));
//   }


// My loop which draws an X
// for  (let i = 0; i < length; i++) {
//     let xIt;
//     let yIt;
//     /*
//     x,y
//     x,-y
//     -x,-y
//     -x,y
//     */
//     for (let f = 0; f<4; f++){
//         if(f==0){
//             xIt = moveOffset;
//             yIt = moveOffset;
//         } else if (f==1){
//             xIt = moveOffset;
//             yIt = moveOffset*-1;
//         } else if (f==2){
//             xIt = moveOffset*-1;
//             yIt = moveOffset*-1;
//         } else {
//             xIt = moveOffset*-1;
//             yIt = moveOffset;
//         }
//         ctx.beginPath();
//         // arc (x,y,size,)
//         ctx.arc((width/2)+xIt, (height/2)+yIt, 4, 0, 2 * Math.PI);
//         ctx.lineWidth = 5;
//         //ctx.strokeStyle = '#FF0000';
//         const strokeColor = `rgba(${255-length},0,${255-length},0.9)`;
//         console.log(`strokeColor: ${strokeColor}`);
//         ctx.strokeStyle = strokeColor;
//         ctx.stroke();
//     }

//     moveOffset += 0.7;
//     length--;
// }

    /*
    x,y
    x,-y
    -x,-y
    -x,y
    */

    // function drawFromCenter() {
    //     moveOffset += 0.7;
    //     for (let f = 0; f<4; f++){
    //         if(f==0){
    //             xIt = moveOffset;
    //             yIt = moveOffset;
    //         } else if (f==1){
    //             xIt = moveOffset;
    //             yIt = moveOffset*-1;
    //         } else if (f==2){
    //             xIt = moveOffset*-1;
    //             yIt = moveOffset*-1;
    //         } else {
    //             xIt = moveOffset*-1;
    //             yIt = moveOffset;
    //         }
    //         ctx.beginPath();
    //         // arc (x,y,size,)
    //         ctx.arc((width/2)+xIt, (height/2)+yIt, 4, 0, 2 * Math.PI);
    //         ctx.lineWidth = 5;
    //         //ctx.strokeStyle = '#FF0000';
    //         const strokeColor = `rgba(${255-length},0,${255-length},0.9)`;
    //         console.log(`strokeColor: ${strokeColor}`);
    //         ctx.strokeStyle = strokeColor;
    //         ctx.stroke();
    //     }
    // }