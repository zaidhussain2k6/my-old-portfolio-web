import React, { useEffect, useState } from 'react';

function Page1() {
  const text = "Coming Soon";
  const typingDelay = 150; // Delay in milliseconds between typing characters
  const erasingDelay = 100; // Delay in milliseconds before erasing characters
  const pauseDelay = 1000; // Delay in milliseconds before starting next iteration
  const loopCount = 3; // Number of times the typing animation loops

  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [loopCounter, setLoopCounter] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        if (charIndex <= text.length) {
          setDisplayText(text.slice(0, charIndex) + '|');
          setCharIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCharIndex(0);
            setLoopCounter((prevCounter) => prevCounter + 1);
          }, pauseDelay);
        }
      } else {
        if (displayText !== '') {
          setDisplayText(text.slice(0, charIndex) + '|');
          setCharIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(true);
            setCharIndex(0);
            setLoopCounter((prevCounter) => prevCounter + 1);
          }, pauseDelay);
        }
      }

      if (loopCounter === loopCount) {
        clearInterval(typingInterval);
      }
    }, isTyping ? typingDelay : erasingDelay);

    return () => clearInterval(typingInterval);
  }, [charIndex, isTyping, loopCounter]);

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-6xl text-center'>{displayText}</h1>
    </div>
  );
}

export default Page1;
