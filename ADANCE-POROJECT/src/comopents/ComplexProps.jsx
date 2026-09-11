import { useState } from "react"
// User Profile Card component that accepts nested props

function UserProfileCard({user, theme,actions}){
  return (
    <div
      className={`p-6 rounded-xl shadow-lg ${theme.backgroundColor} ${theme.textColor}`}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div
          className={`w-16 h-16 rounded-full ${theme.avatarBg} flex items-center justify-center text-2xl shadow-inner`}
        >
          {user.avatar}
        </div>

        <div>
          <h3 className="text-xl font-bold">{user.name}</h3>
          <p className="text-sm opacity-75">{user.email}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-black/10">{user.role}</span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${theme.badgeBg}`}>
              {user.status}
            </span>
          </div>
        </div>
      </div>

      {user.stats && (
        <div className="grid grid-cols-3 gap-2 my-4 p-3 bg-white/50 rounded-lg text-center backdrop-blur-sm">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <div className="text-lg font-bold">{value}</div>
              <div className="text-xs uppercase tracking-wider opacity-75">{key}</div>
            </div>
          ))}
        </div>
      )}

      {actions && (
        <div className="flex gap-3 mt-4">
          {actions.primary && (
            <button
              onClick={actions.primary.onClick}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition cursor-pointer shadow-sm ${actions.primary.className}`}
            >
              {actions.primary.label}
            </button>
          )}
          {actions.secondary && (
            <button
              onClick={actions.secondary.onClick}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition cursor-pointer shadow-sm ${actions.secondary.className}`}
            >
              {actions.secondary.label}
            </button>
          )}
        </div>
      )}
    </div>
  );
}


function ComplexProps() {

  const [message,setMessage]=useState("");
   const users = [
     {
       user: {
         name: "Alice Johnson",
         email: "alice@example.com",
         avatar: "👩‍💼",
         role: "Admin",
         status: "Active",
         stats: {
           posts: 145,
           followers: 2834,
           following: 421,
         },
       },
       theme: {
         backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
         textColor: "text-gray-800",
         avatarBg: "bg-purple-300",
         badgeBg: "bg-purple-200",
       },
       actions: {
         primary: {
           label: "View Profile",
           onClick: () => setMessage("Viewing Alice's profile"),
           className: "bg-purple-500 text-white hover:bg-purple-600",
         },
         secondary: {
           label: "Message",
           onClick: () => setMessage("Opening message to Alice"),
           className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
         },
       },
     },
     {
       user: {
         name: "Bob Smith",
         email: "bob@example.com",
         avatar: "👨‍💻",
         role: "Developer",
         status: "Online",
         stats: {
           projects: 28,
           commits: 1523,
           reviews: 89,
         },
       },
       theme: {
         backgroundColor: "bg-gradient-to-br from-green-100 to-teal-100",
         textColor: "text-gray-800",
         avatarBg: "bg-green-300",
         badgeBg: "bg-green-200",
       },
       actions: {
         primary: {
           label: "View Profile",
           onClick: () => setMessage("Viewing Bob's profile"),
           className: "bg-green-500 text-white hover:bg-green-600",
         },
         secondary: {
           label: "Collaborate",
           onClick: () => setMessage("Starting collaboration with Bob"),
           className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
         },
       },
     },
   ];


  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Complex Props</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Complex props allow you to pass nested objects and functions, enabling
        sophisticated component configurations and interactions.
      </p>
      {message && (
        <div className="mb-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-800 rounded">
          {message}
        </div>
      )}
      <div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">User Profile Cards (Nested User, Theme, and Actions):</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {users.map((userData, index) => (
              <UserProfileCard key={index} {...userData} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComplexProps
