$(document).ready(function() {
    
    var metaData = [
      {
        "name": "Winner",
        "parent": "null",
        "children": [
          {
            "name": "Finalist 1",
            "parent": "Winner",
            "children": [
              {
                "name": "Anonymous",
                "status": "win",
                "parent": "Finalist 1",
                "children": [
                  {
                    "name": "Trigo Masters",
                    "parent": "Anonymous",
                    "status": "lost"
                  },
                  {
                    "name": "Anonymous",
                    "parent": "Anonymous",
                    "status": "win"
                  }
                ]
              },
              {
                "name": "Knockout Knights",
                "status": "win",
                "parent": "Finalist 1",
                "children": [
                  {
                    "name": "Rookie Masters",
                    "parent": "Knockout Knights",
                    "status": "lost"
                  },
                  {
                    "name": "Knockout Knights",
                    "parent": "Knockout Knights",
                    "status": "win"
                  }
                ]
              }
            ]
          },{
            "name": "Finalist 2",
            "parent": "Winner",
            "children": [
                {
                "name": "Fluke Aimers",
                "status": "win",
                "parent": "Finalist 2",
                "children": [
                  {
                    "name": "Fluke Aimers",
                    "status": "win",
                    "parent": "Fluke Aimers"
                  },
                  {
                    "name": "Save Neduvaasal",
                    "parent": "Fluke Aimers",
                    "status": "lost"
                  }
                ]
              },
              {
                "name": "Trichy Thunders",
                "parent": "Finalist 2",
                "status": "win",
                "children": [
                  {
                    "name": "Kungfu Pandas",
                    "parent": "Trichy Thunders",
                    "status": "lost"
                  },
                  {
                    "name": "Trichy Thunders",
                    "parent": "Trichy Thunders",
                    "status": "win"
                  }
                ]
              }
            ]
          },{
            "name": "Finalist 3",
            "parent": "Winner",
            "children": [
              {
            "name": "Aiyayo ivangala",
            "status": "win",
            "parent": "Finalist 3",
            "children": [
              {
                "name": "Aiyayo ivangala",
                "parent": "Aiyayo ivangala",
                "status": "win"
              },
              {
                "name": "Shooting Stars",
                "parent": "Aiyayo ivangala",
                "status": "lost"
              }
            ]
          },
          {
            "name": "Kabalis",
            "status": "win",
            "parent": "Finalist 3",
            "children": [
              {
                "name": "Timon & Pumba",
                "status": "lost",
                "parent": "Kabalis"
              },
              {
                "name": "Kabalis",
                "status": "win",
                "parent": "Kabalis"
              }
            ]
          }
            ]
          }
        ]
      }
    ];

    var margin = {top: 0, right: 0, bottom: 0, left: 0},
      width = 1000,
      height = window.innerHeight - 30;
      
    var i = 0,
      duration = 750,
      radius = 5,
      root;

    /**
    *  Create the tree Format using the layout
    */
    var tree = d3.layout.tree()
                .size([height, width]);

    /**
    *  Create the diagonal Format using the diagonal function
    */
    var diagonal = d3.svg.diagonal()
                .projection(function(d) { return [d.y, d.x]; });

    /**
    *  Append the svg into the body of the container
    */
    var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height)
      .style({
        'display': 'block',
        'margin': 'auto',
        'margin-left': '200px',
        'padding-right': '50px'
      })
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
      .append("g");
      

    root = metaData[0];
    root.x0 = height / 2;
    root.y0 = 0;
      
    update(root);

    function update(source) {

      /**
       * create the new tree layout.
       */
        var nodes = tree.nodes(root).reverse(),
            links = tree.links(nodes);

      /**
        * creating the position y for the node
      */     
        nodes.forEach(function(d){
            d.y = width - (d.depth * 190); 
        });

      // Update the nodes…
        var node = svg.selectAll("g.node")
                    .data(nodes, function(d){
                        return d.id || (d.id = ++i); 
                    });

       /**
        * Creating the expand/collapse functon for the node and applying the color and radius for the circle
       */            
        var nodeEnter = node.enter().append("g")
                        .attr("class", "node")
                        .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
                        .on("click", click);

        nodeEnter.append("circle")
                .attr("r", radius)
                .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

        nodeEnter.append("text")
                .attr("x", function(d) { return d.children || d._children ? 20 : -140; })
                .attr("dy", function(d) { return d.children || d._children ? -15 : ".35em"; })
                .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
                .text(function(d) { return d.name; })
                .style("fill", function(d){
                  if(d.status == 'lost'){
                    return 'red';
                  }else if(d.status == 'win'){
                    return '#2ECC71'
                  }
                })
                .style("fill-opacity", radius);

      // Transition nodes to their new position.
        var nodeUpdate = node.transition()
                .duration(duration)
                .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

        nodeUpdate.select("circle")
                .attr("r", 6)
                .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

        nodeUpdate.select("text")
                .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
                            .duration(duration)
                            .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
                            .remove();

        nodeExit.select("circle")
                .attr("r", radius);

        nodeExit.select("text")
                .style("fill-opacity", radius);

      // Update the links…
      var link = svg.selectAll("path.link")
        .data(links, function(d) { return d.target.id; });

      // Enter any new links at the parent's previous position.
      link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function(d) {
        var o = {x: source.x0, y: source.y0};
        return diagonal({source: o, target: o});
        });

      // Transition links to their new position.
      link.transition()
        .duration(duration)
        .attr("d", diagonal);

      // Transition exiting nodes to the parent's new position.
      link.exit().transition()
        .duration(duration)
        .attr("d", function(d) {
        var o = {x: source.x, y: source.y};
        return diagonal({source: o, target: o});
        })
        .remove();

      // Stash the old positions for transition.
      nodes.forEach(function(d) {
      d.x0 = d.x;
      d.y0 = d.y;
      });
    }

    // Toggle children on click.
    function click(d) {
      if (d.children) {
      d._children = d.children;
      d.children = null;
      } else {
      d.children = d._children;
      d._children = null;
      }
      update(d);
    }

    $(window).resize(function(){
        update(root)
    })
});