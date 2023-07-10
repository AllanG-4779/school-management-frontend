import Header from "../../components/integrated/Header";
const authmenu = [
    {
        path:"user/staff/login",
        title:"Staff Login"
    },
    {
        path:"user/student/login",
        title:"Admin Login"
    }
]
const OnBoarding: React.FC = () => {
    return <>
        <Header page={"Onboarding"} items={authmenu} actionButton={false}/>
    </>
}
export default OnBoarding;