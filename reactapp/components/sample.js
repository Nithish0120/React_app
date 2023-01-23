import { useEffect } from "react";
export default function sampleApp(){
    useEffect(() => {
        const typedText = document.querySelector(".typed-text");
        const cursor = document.querySelector(".cursor"); 
        const textArray = ["Web Developer", "Web Designer", "Tutor", "Learner..."];

        let textArrayIndex = 0;
        let charIndex = 0;

        const erase = () => {
        if (charIndex > 0) {
            cursor.classList.remove('blink');
            typedText.textContent = textArray[textArrayIndex].slice(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 80);
        } else {
            cursor.classList.add('blink');
            textArrayIndex++;
            if (textArrayIndex > textArray.length - 1) {
            textArrayIndex = 0;
            }
            setTimeout(type, 1000);
        }
        }

        const type = () => {
        if (charIndex <= textArray[textArrayIndex].length - 1) {
            cursor.classList.remove('blink');
            typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 120);
        } else {
            cursor.classList.add('blink');
            setTimeout(erase, 1000);
        }
        }

        type();
    
        
    });
    return (
        <div className="typeText">
         <p className="header1">I'm a <span className="typed-text"></span><span className="cursor blink">&nbsp;</span></p>
        </div>
       
    )
}