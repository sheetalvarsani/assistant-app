const Greeting = () => {
    const currentHour = new Date().getHours();
    let greetingMessage = "Good day!";
  
    if (currentHour < 12) {
      greetingMessage = "Good morning!";
    } else if (currentHour < 18) {
      greetingMessage = "Good afternoon!";
    } else {
      greetingMessage = "Good evening!";
    }
  
    return <h1 className="greeting">{greetingMessage}</h1>;
  };
  
  export default Greeting;
  