import { Navigate, useLocation } from "react-router-dom";
import { getAuthState, hasAnyRoles } from "../Utility/authUtility";

function RoleBasedRoute({ children, allowedRoles }) {
  const { isAuthenticated, currentUser } = getAuthState();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (!hasAnyRoles(allowedRoles)) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>Access Denied</h1>
        <p>You don't have the permission to access this page.</p>
        <p>
          Your Role : <strong>{currentUser?.role}</strong>
        </p>
        <p>
          Required Roles : <strong>{allowedRoles.join(", ")}</strong>
        </p>
        <button
          onClick={() => window.history.back()}
          className="btn btn-secondary"
        >
          Go Back
        </button>
      </div>
    );
  }

  return children;
}

export default RoleBasedRoute;
