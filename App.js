// const heading = React.createElement("h1", {}, "Hello from React");




const parent = React.createElement("div",{id: "parent"},
[React.createElement("div", {id: "child1"},
[React.createElement("h1", {}, "i am h1 tag"),
React.createElement("h2", {}, "i am h2 tag")]  //array is used for creating more child []
)],
[React.createElement("div", {id: "child2"},
[React.createElement("h1", {}, "i am h1 tag"),
React.createElement("h2", {}, "i am h2 tag")]
)],
 );




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);