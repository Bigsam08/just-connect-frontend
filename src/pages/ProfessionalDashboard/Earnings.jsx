/**
 * @returns a component that shows all the professional earnings
 */

import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const Earnings = () => {
  const summary = {
    total: "₦250,000",
    available: "₦120,000",
    pending: "₦130,000",
  };

  const transactions = [
    {
      id: 1,
      type: "credit",
      amount: "₦15,000",
      status: "Released",
      date: "Today",
      service: "Plumbing Service",
    },
    {
      id: 2,
      type: "credit",
      amount: "₦8,000",
      status: "Pending",
      date: "Yesterday",
      service: "Leak Repair",
    },
    {
      id: 3,
      type: "debit",
      amount: "₦20,000",
      status: "Withdrawn",
      date: "2 days ago",
      service: "Withdrawal",
    },
  ];

  return (
    <div className="w-full max-w-6xl flex flex-col gap-6" data-aos="fade">
      <h1 className="text-black text-lg font-semibold">My Earnings</h1>
      {/* Summary */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border rounded-2xl p-4 shadow-sm">
          <p className="text-sm text-gray-500">Total Earnings</p>
          <h2 className="text-xl font-semibold text-gray-800">
            {summary.total}
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-4 shadow-sm">
          <p className="text-sm text-gray-500">Available</p>
          <h2 className="text-xl font-semibold text-green-600">
            {summary.available}
          </h2>
        </div>

        <div className="bg-white border rounded-2xl p-4 shadow-sm">
          <p className="text-sm text-gray-500">Pending</p>
          <h2 className="text-xl font-semibold text-yellow-600">
            {summary.pending}
          </h2>
        </div>
      </section>

      {/* Withdraw */}
      <section className="bg-white border rounded-2xl p-4 shadow-sm flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">
            Withdraw Funds
          </h3>
          <p className="text-xs text-gray-500">
            Transfer your available balance to your bank account
          </p>
        </div>

        <button className="px-4 py-2 bg-black text-white rounded-xl text-sm hover:opacity-90">
          Withdraw
        </button>
      </section>

      {/* Transactions */}
      <section className="bg-white border rounded-2xl p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-700 mb-4">
          Transactions
        </h3>

        <div className="flex flex-col gap-3">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                {/* Icon */}
                <div
                  className={`p-2 rounded-lg ${
                    tx.type === "credit"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {tx.type === "credit" ? (
                    <ArrowDownRight size={18} />
                  ) : (
                    <ArrowUpRight size={18} />
                  )}
                </div>

                {/* Info */}
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {tx.service}
                  </p>
                  <p className="text-xs text-gray-500">{tx.date}</p>
                </div>
              </div>

              {/* Right */}
              <div className="text-right">
                <p
                  className={`text-sm font-semibold ${
                    tx.type === "credit" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {tx.type === "credit" ? "+" : "-"}
                  {tx.amount}
                </p>

                <span className="text-xs text-gray-500">{tx.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Earnings;
