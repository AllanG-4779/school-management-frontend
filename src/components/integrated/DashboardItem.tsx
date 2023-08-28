type Item = {
  title: string;
  color: string;
  value: string;
  icon: React.ReactElement;
  iconbg: string;
};
const DashboardItem = ({ title, value, icon, color, iconbg }: Item) => {
  return (
    <>
      <div className="flex bg-white p-5 rounded-lg items-center justify-between">
        <div>
          <p className="text-gray-500 text-xl">{title}</p>
          <p className={`${color} text-3xl font-semibold`}>{value}</p>
        </div>
        <div className={`${iconbg} p-3 rounded-md ${color}`}>{icon}</div>
      </div>
    </>
  );
};
export default DashboardItem;
