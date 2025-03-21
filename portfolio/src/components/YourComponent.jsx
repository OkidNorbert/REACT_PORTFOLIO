import Section from './Section';

const YourComponent = () => {
    return (
        <div>
            <Section>
                <h2 className="animate-on-scroll">Your Title</h2>
                <p className="animate-on-scroll">Your content</p>
            </Section>
            
            {/* For tables */}
            <table>
                <tbody>
                    {data.map((item, index) => (
                        <tr 
                            key={index} 
                            className="animate-on-scroll table-row-hover"
                        >
                            <td>{item.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            {/* For images */}
            <img 
                src="your-image.jpg" 
                alt="description" 
                className="animate-on-scroll"
            />
        </div>
    );
}; 