import './Users.scss';

function Users({ users, setUsers, isEditable }) {
  return users?.length > 0
    ? users.map((user, index) => {
        return (
          <div key={index} className='badge badge--gray'>
            <span>{user}</span>
            {isEditable ? (
              <button
                className='badge__remove'
                onClick={() => {
                  setUsers(users.filter((item) => item !== user));
                }}
              >
                <img
                  src='/assets/icons/calculator/remove-user.svg'
                  alt='Удалить пользователя'
                />
              </button>
            ) : (
              ''
            )}
          </div>
        );
      })
    : '';
}

export default Users;
