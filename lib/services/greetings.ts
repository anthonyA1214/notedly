export function getGreeting(): string {
    const hour = new Date().getHours();

    const greetings = {
        morning: ["Good morning!", "Top of the morning to you!", "Wishing you a bright morning!", "Rise and shine!", "Morning! Hope you have a great day ahead!"],
        afternoon: ["Good afternoon!", "Hope your day's going well!", "Hello there!", "Wishing you a productive afternoon!", "Afternoon! Keep up the great work!"],
        evening: ["Good evening!", "Hope you had a great day!", "Wishing you a relaxing evening!", "Evening! Time to unwind!", "Good to see you this evening!"],    
        night: ["Working late? Good night!", "Hope you had a great day!", "Wishing you a restful night!", "Good night! Don't forget to relax!", "Night owl, huh? Take care!"]
    }

    let selected: string[];
    
    if (hour >= 5 && hour < 12) {
        selected = greetings.morning;
    } else if (hour >= 12 && hour < 17) {
        selected = greetings.afternoon;
    } else if (hour >= 17 && hour < 21) {
        selected = greetings.evening;
    } else {
        selected = greetings.night;
    }

    return selected[Math.floor(Math.random() * selected.length)];
}