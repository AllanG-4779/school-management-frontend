type HeaderProps = {
    title: string
}
export const AuthHeader = (props: HeaderProps)=>{
  return (
    <>
      <div className="text-center flex flex-col gap-3">
        <div className="flex flex-col items-center">
          <p className="text-xl font-bold text-purple-600">
            St. Michaels Secondary School
          </p>
          <small className="italic text-xs text-purple-600">
            Education our Hope
          </small>
        </div>
        <p className="text-light text-2xl text-gray-800">{props.title}</p>
      </div>
    </>
  );
}