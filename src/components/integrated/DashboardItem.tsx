type Item = {
  title: string;
  value: string;
  icon: React.ReactElement;
};
const DashboardItem = ({ title, value, icon }: Item) => {
  return (
    <>
      <div className="flex bg-white p-5 rounded-lg items-center justify-between">
        <div>
          <p className="text-gray-500">{title}</p>
          <p>{value}</p>
        </div>
        <div className="bg-purple-100 p-3 rounded-md text-purple-600">
          {icon}
        </div>
      </div>
    </>
  );
};
export default DashboardItem;
