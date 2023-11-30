import usePayments from '../../../Hooks/usePayments';
// import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import SubscriberPaiChart from './SubscriberPaiChart';
// import { useState } from 'react';
// import useSubscriber from '../../../Hooks/useSubscriber';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];




const Balance = () => {

    
    const [paymentHistory] = usePayments()
    const totalSalary = paymentHistory.reduce((total, item) => total + parseFloat(item.money), 0);
    const salary = parseFloat(totalSalary);
 


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
        <div >

            <div>
                <h1 className='text-2xl font-semibold '>Total Payment   <span className='text-2xl font-bold '>${salary}</span> </h1>
            </div>
            <div className=' flex items-center justify-between '>
                <h1 className=' mb-10 font-semibold text-xl '>Payment Histroy PaiChart  </h1>
                <h1 className=' mb-10 font-semibold text-xl '> NewsLetter Subscriber PaiChart  </h1>
            </div>
            <div className='flex '>
                <div>
                    <BarChart
                        width={500}
                        height={300}
                        data={paymentHistory}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="money" />
                        <YAxis dataKey="money" />
                        <Bar dataKey="money" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {paymentHistory.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div>
                    <SubscriberPaiChart></SubscriberPaiChart>
                </div>
            </div>
        </div>
    );
};

export default Balance;