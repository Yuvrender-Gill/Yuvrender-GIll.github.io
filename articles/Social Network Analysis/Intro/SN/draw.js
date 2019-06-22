function draw() {
    // create some nodes
    var nodes = [
        {id: 0, "label": "Tom", "group": 1},
        {id: 1, "label": "Napoleon", "group": 1},
        {id: 2, "label": "COlbert", "group": 1},
        {id: 3, "label": "Kim", "group": 1},
        {id: 4, "label": "Hassris", "group": 1},
        {id: 5, "label": "Geborand", "group": 3},
        {id: 6, "label": "Ahmed", "group": 1},
        {id: 7, "label": "John", "group": 3},
        {id: 8, "label": "Maxwell", "group": 1},
        {id: 9, "label": "OldMan", "group": 1},
        {id: 10, "label": "Lenord", "group": 2},
        {id: 11, "label": "Hussy", "group": 2},
        {id: 12, "label": "Zeyao", "group": 3},
        {id: 13, "label": "Florence", "group": 2},
        {id: 14, "label": "Mike", "group": 2},
        {id: 15, "label": "Amit", "group": 4},
        {id: 16, "label": "Anam", "group": 4},
        {id: 17, "label": "Virat", "group": 5},
        {id: 18, "label": "Aleksa", "group": 5},
       
    ];

    // create some edges
    var edges = [
        {"from": 1, "to": 0},
        {"from": 2, "to": 0},
        {"from": 3, "to": 0},
        {"from": 3, "to": 2},
        {"from": 4, "to": 0},
        {"from": 5, "to": 0},
        {"from": 6, "to": 0},
        {"from": 7, "to": 0},
        {"from": 8, "to": 0},
        {"from": 9, "to": 0},
        {"from": 11, "to": 10},
        {"from": 11, "to": 3},
        {"from": 11, "to": 2},
        {"from": 11, "to": 0},
        {"from": 12, "to": 11},
        {"from": 13, "to": 11},
        {"from": 14, "to": 11},
        {"from": 17, "to": 18},
   
   
    ];

    // create a network
    var container = document.getElementById('mynetwork1');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        nodes: {
            shape: 'dot',
            size: 16
        },
        physics: {
            forceAtlas2Based: {
                gravitationalConstant: -26,
                centralGravity: 0.005,
                springLength: 230,
                springConstant: 0.18
            },
            maxVelocity: 146,
            solver: 'forceAtlas2Based',
            timestep: 0.35,
            stabilization: {iterations: 150}
        }
    };
    var network = new vis.Network(container, data, options);

}