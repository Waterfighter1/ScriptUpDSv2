const rotatingElements = document.getElementsByClassName("quad-picture-gradient-border");

document.addEventListener('mousemove', (e) => {

    for(i=0; i<rotatingElements.length; i++) {
        
        const elementRect = rotatingElements[i].getBoundingClientRect();

        // Calculate the center of the element
        const elementCenterX = elementRect.left + elementRect.width / 2;
        const elementCenterY = elementRect.top + elementRect.height / 2;

        // Calculate the difference between mouse position and element center
        const diffX = e.clientX - elementCenterX;
        const diffY = e.clientY - elementCenterY;

        // Calculate the angle in radians
        const angleRad = Math.atan2(diffY, diffX);

        // Convert radians to degrees (optional, for CSS transform)
        const angleDeg = angleRad * (180 / Math.PI);

        rotatingElements[i].style.transform = `rotate(${angleDeg}deg)`;
        //rotatingElements[i].style.rotate = `rotate(${angleDeg}deg)`;

    }
        

    // Apply the rotation using CSS transform
    
});