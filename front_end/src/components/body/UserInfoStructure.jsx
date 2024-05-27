/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const UserInfoStructure = ({ userData }) => {
  const address = userData?.address;
  const userName = userData?.userName;
  const email = userData?.email;
  const phone = userData?.phone;
  const role = userData?.role;
  return (
    <div className="w-fit mt-5 py-2 px-4  font-mono shadow-md bg-slate-100 rounded-md">
      <div className="font-semibold  text-xl whitespace-nowrap">{`UserName:-${userName}`}</div>
      <div className="md:text-base text-sm whitespace-nowrap ">{`Phone No:-${phone}`}</div>
      <div className="md:text-base text-sm whitespace-nowrap ">{`Email:-${email}`}</div>
      <div className="md:text-base text-sm whitespace-nowrap ">{`Address:-${address}`}</div>
      <div className="md:text-base text-sm whitespace-nowrap ">{`Role:-${
        role === 1 ? "Admin" : "user"
      }`}</div>
    </div>
  );
};
export default UserInfoStructure;
