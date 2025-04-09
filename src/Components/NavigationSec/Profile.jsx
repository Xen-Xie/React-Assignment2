import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const ProfileBar = ({ hasNotification }) => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3 max-w-full overflow-hidden">
      {/* Notification Bell */}
      <div className="relative w-9 h-9 bg-white rounded-full flex items-center justify-center shrink-0">
        <FontAwesomeIcon icon={faBell} className="text-secondary text-base" />
        <span
          className={`absolute top-0.5 right-0.5 w-2.5 h-2.5 rounded-full ${
            hasNotification ? 'bg-primary' : 'bg-[#4ADE80]'
          } border-2 border-white`}
        ></span>
      </div>

      {/* Avatar */}
      <img
        src="avatar.svg"
        alt="User avatar"
        className="rounded-full shrink-0"
      />

      {/* Name & Email */}
      <div className="flex flex-col min-w-0 overflow-hidden">
        <span className="text-tertiary font-medium text-sm truncate">Usman Zafar</span>
        <span className="text-tertiary text-xs truncate inline">
        usmanzafar@gmail.com
        </span>
      </div>
    </div>
  );
};

export default ProfileBar;
