import React, { useEffect, useRef } from 'react';
import Style from './Compliance.module.css';
import * as d3 from 'd3';

const ComplianceGraphUsingD3 = ({ data, others }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // Get the actual dimensions of the SVG container
        const svgWidth = svgRef.current.clientWidth;
        const svgHeight = svgRef.current.clientHeight;


        // Calculate the center coordinates
        const centerX = svgWidth / 2;
        const centerY = svgHeight / 2;


        const strokeWidth = svgHeight * 0.06;

        const renderArc = (index) => {
            const modifyPercentage = 100 - data[index].percentage;
            const radius = centerY - strokeWidth - index * svgHeight * 0.07;
            const endAngle = (modifyPercentage / 100) * Math.PI;

            const arcMain = d3.arc()
                .innerRadius(radius)
                .outerRadius(radius)
                .startAngle(0)
                .endAngle(Math.PI);

            // create svg for outer
            svg.append('path')
                .attr('d', arcMain)
                .attr('transform', `translate(${centerX},${centerY})`)
                .attr('fill', 'none')
                .attr('stroke', data[index].mainRadiusColor)
                .attr('stroke-width', strokeWidth);

            // Create an arc generator for the right-side half circle
            const arc = d3.arc()
                .innerRadius(radius)
                .outerRadius(radius)
                .startAngle(Math.PI)
                .endAngle(endAngle);

            // Append a path element using the arc generator
            svg.append('path')
                .attr('d', arc)
                .attr('transform', `translate(${centerX},${centerY})`)
                .attr('fill', 'none')
                .attr('stroke', data[index].progressRadiusColor)
                .attr('stroke-width', strokeWidth);

            // Add text at the bottom of the arc
            svg.append('text')
                .attr('x', centerX - 30)
                .attr('y', centerY + radius + 5)
                .attr('text-anchor', 'end')
                .attr('fill', '#000')
                .attr('font-weight', '400')
                .attr('font-size', '1rem') // start animation
                .transition() // Add transition
                .duration(1000) // Set the duration of the transition in milliseconds
                .attr('font-size', '0.6rem') // End with 0.5rem
                .text(`${data[index].name} ${data[index].percentage}%`);
        };

        // Render arcs for each data element
        for (let i = 0; i < data.length; i++) {
            renderArc(i);
        }

        // Add text for "all Apps 99.82%"
        svg.append('text')
            .attr('x', centerX - 90)
            .attr('y', centerY + (centerY * 0.02))  // Adjust the vertical position as needed
            .attr('text-anchor', 'end')
            .attr('fill', '#ed0295')
            .attr('font-weight', '400')
            .attr('font-size', '1rem') // start animation
            .transition() // Add transition
            .duration(1000) // Set the duration of the transition in milliseconds
            .attr('font-size', '0.6rem')
            .text('all Apps');

        // Add text for "all Apps 99.82%"
        svg.append('text')
            .attr('x', centerX + 10)
            .attr('y', centerY + (centerY * 0.04))  // Adjust the vertical position as needed
            .attr('text-anchor', 'end')
            .attr('fill', '#ed0295')
            .attr('font-weight', '900')
            .attr('font-size', '1rem') // start animation
            .transition() // Add transition
            .duration(1000) // Set the duration of the transition in milliseconds
            .attr('font-size', '1.5rem')
            .text(`${others.value} ${others.endUnit}`);

        svg.style('background-color', 'transparent');
    }, [data, others]);

    return (
        <div className={Style.ComplianceGraphWapper}>
            <svg ref={svgRef} width="100%" height="100%"></svg>
        </div>
    );
}

export default ComplianceGraphUsingD3
