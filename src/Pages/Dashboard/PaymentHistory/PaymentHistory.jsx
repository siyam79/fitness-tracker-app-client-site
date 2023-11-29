import usePayments from "../../../Hooks/usePayments";

const PaymentHistory = () => {
    const [paymentHistory] = usePayments()
    console.log(paymentHistory);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className=" bg-slate-200 w-full text-lg font-semibold ">
                            <th>#</th>
                            <th>Date</th>
                            <th>TransactionId</th>
                            <th>Salary</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {paymentHistory.map((payment,i) => <tr key={payment._id}
                         className="hover">
                            <th>{i+1}</th>
                            <td>{payment.date} </td>
                            <td>{payment.transactionId}</td>
                            <td className=" text-lg font-bold">${payment.money}</td>
                            <td> <button className="rounded bg-green-500 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal w-[100px] text-white "> {payment.status} </button> </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;