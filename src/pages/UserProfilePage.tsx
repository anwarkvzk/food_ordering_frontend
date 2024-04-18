import { useGetMyUser, useUpdaeMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdaeMyUser();

  if (isGetLoading) {
    return <span>Loading...</span>;
  }
  return <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading} />;
};

export default UserProfilePage;
