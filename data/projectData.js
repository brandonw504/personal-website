const projectData = [
    {
        title: "Song Vocal Extraction",
        description: `Trained a deep convolutional U-Net to isolate vocals from songs.
        We converted raw audio to spectrograms and trained a mask spectrogram that is applied to the input song to get the vocals.
        I'm currently implementing a transformer variant of the U-Net and deploying it using Flask.`,
        techStack: "PyTorch, Scikit-Learn, and Librosa",
        githubLink: "https://github.com/brandonw504/song-vocal-extraction"
    },
    {
        title: "Deep Learning Projects",
        description: `These projects were part of a graduate course on advanced deep learning at UC Davis.
        In one of the projects, I made several modifications to the nanoGPT code created by Andrej Karpathy in order to improve performance and runtime.
        The modifications include reducing dimensionality of key, query, and value vectors, implementing sliding window attention, and changing the MLP architecture.
        The other project involved performing knowledge distillation in order to improve a small pretrained vision transformer model with the help of a larger model.`,
        techStack: "PyTorch",
        githubLink: "https://github.com/brandonw504/deep-learning-projects"
    },
    {
        title: "Shazam Social",
        description: `An iOS social media app in which users can use ShazamKit's music recognition to identify songs and make posts.
        Users can add a caption and location to their posts, as well as see each other's posts in either a list view or a map view.
        From the posts, users can also play the songs that others have Shazamed through Apple Music.
        The posts are stored in a MongoDB Atlas instance.`,
        techStack: "SwiftUI, Realm, and MongoDB",
        githubLink: "https://github.com/brandonw504/shazam-social"
    },
    {
        title: "Shoppr",
        description: `An iOS shopping list app in which users can scan price tags with text recognition and track their purchases.
        Item prices are stored in a MongoDB Atlas instance and made available through a REST API created with Node.
        Stores can call this API see which items users are buying at which stores and make business decisions with this information.
        Users can decide where to shop based on logged prices.`,
        techStack: "SwiftUI, Node.js, Express.js, Realm, and MongoDB",
        githubLink: "https://github.com/brandonw504/shoppr"
    },
    {
        title: "Music Map",
        description: `A website leveraging the Spotify API allowing users to find people in the same area with similar music interests.
        Currently, users can pick an area and see what songs people are listening to live.
        In the future, we plan to display a world map where users can drop a marker anywhere and see what people are listening to there.`,
        techStack: "React.js, Express.js, Apollo GraphQL, PostgreSQL, and MaterialUI",
        githubLink: "https://github.com/Austin2Shih/Music-Map"
    },
    {
        title: "Carpool App",
        description: `An iOS app in which users can find others traveling in a similar direction and carpool together. 
        Matching users is done on a backend server made accessible through a REST API created using Node and Express.
        Users are alerted through Pusher's publish and subscribe framework, and user data is stored on a MongoDB NoSQL database.`,
        techStack: "SwiftUI, Node.js, Express.js, Pusher, Realm, and MongoDB",
        githubLink: "https://github.com/brandonw504/carpool-app"
    },
    {
        title: "Field Event Tracker",
        description: `An iOS app used to collect marks for field events in track and field.
        Greatly improved efficiency in recording and ranking athletes' marks at track meets by switching from paper to a digital medium.`,
        techStack: "SwiftUI, CoreData",
        githubLink: "https://github.com/brandonw504/field-event-tracker"
    }
]

export default projectData