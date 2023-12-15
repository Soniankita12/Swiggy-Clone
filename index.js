const heading = React.createElement("div",{id:'parent'},React.createElement("div",{id:'child'},[React.createElement('h1',{},"hi nestingggggg"),React.createElement('h2',{},"h2 taggg")]));
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);