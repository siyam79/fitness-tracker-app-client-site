import useSubscriber from '../../../Hooks/useSubscriber';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];




const SubscriberPaiChart = () => {
    const [allSubscriber] = useSubscriber()
    console.log(allSubscriber);

    // const [allSubscriber] = useSubscriber()

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>

            <div className=' max-w-md '>
                <div>
                    <BarChart
                        width={500}
                        height={300}
                        data={allSubscriber}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="number" />
                        <YAxis dataKey="number" />
                        <Bar dataKey="number" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {allSubscriber.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default SubscriberPaiChart;