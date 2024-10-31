import React, { useState, useEffect } from "react";
import ReactSelect from "react-select";
import { addUserToProcedure, deleteUsersFromProcedure } from "../../../api/api";

const PlanProcedureItem = ({ planId, procedure, users }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    if (
      procedure &&
      procedure.planProcedureUsers &&
      procedure.planProcedureUsers.length > 0
    ) {
      var ppUsers = procedure.planProcedureUsers.filter(
        (ppu) => ppu.procedureId === procedure.procedureId
      );
      if (ppUsers && ppUsers.length > 0) {
        var pUsers = [];
        ppUsers.forEach((ppu) => {
          var user = users.find((u) => u.value === ppu.userId);
          if (user) pUsers.push(user);
        });
        setSelectedUsers(pUsers);
      }
    }
  }, [planId, procedure, users]);

  const handleAssignUserToProcedure = async (e) => {
    setSelectedUsers(e);
    var userIds = e.map(function (item) {
      return item.value;
    });
    if (userIds.length > 0)
      await addUserToProcedure(planId, procedure.procedureId, userIds);
    else await deleteUsersFromProcedure(planId, procedure.procedureId, userIds);
  };

  return (
    <div className="py-2">
      <div>{procedure.procedureTitle}</div>
      <ReactSelect
        className="mt-2"
        placeholder="Select User to Assign"
        isMulti={true}
        options={users}
        value={selectedUsers}
        onChange={(e) => handleAssignUserToProcedure(e)}
      />
    </div>
  );
};
export default PlanProcedureItem;
