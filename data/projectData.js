const projectData = [
    {
        title: "Shoppr",
        description: `An iOS shopping list app in which users can scan price tags with text recognition and track their purchases.
        Item prices are stored in a MongoDB Atlas instance and made available through a REST API created with Node.
        Stores can call this API see which items users are buying at which stores and make business decisions with this information.
        Users can decide where to shop based on logged prices.`,
        techStack: "SwiftUI, Node, Express, Realm, and MongoDB",
        githubLink: "https://github.com/brandonw504/shoppr"
    },
    {
        title: "Music Map",
        description: `A website leveraging the Spotify API allowing users to find people in the same area with similar music interests.
        Currently, users can pick an area and see what songs people are listening to live.
        In the future, we plan to display a world map where users can drop a marker anywhere and see what people are listening to there.`,
        techStack: "React, Express, Knex.js, Apollo GraphQL, PostgreSQL, and MaterialUI",
        githubLink: "https://github.com/Austin2Shih/Music-Map"
    },
    {
        title: "Carpool App (in progress)",
        description: `An iOS app in which users can find others traveling in a similar direction and carpool together. 
        Matching users is done on a backend server made accessible through a REST API created using Node and Express.
        Users are alerted through Pusher's publish and subscribe framework, and user data is stored on a MongoDB NoSQL database.`,
        techStack: "SwiftUI, Node, Express, Pusher, Realm, and MongoDB",
        githubLink: "https://github.com/brandonw504/carpool-app"
    },
    {
        title: "Field Event Tracker",
        description: `An iOS app used to collect marks for field events in track and field.
        Greatly improved efficiency in recording and ranking athletes' marks at track meets by switching from paper to a digital medium.`,
        techStack: "SwiftUI",
        githubLink: "https://github.com/brandonw504/field-event-tracker"
    }
]

export default projectData