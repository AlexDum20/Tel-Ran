window.name = 'SOS';

const greeting = () => {
    // let name = 'Peter';
    return () => {
        // let name = 'Tigran';
        console.log(`Hello ${name}`);
    }
}

const hello = greeting();
hello();