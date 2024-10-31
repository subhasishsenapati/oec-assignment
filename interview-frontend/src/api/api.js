const api_url = "http://localhost:10010";

export const startPlan = async () => {
  const url = `${api_url}/Plan`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  if (!response.ok) throw new Error("Failed to create plan");

  return await response.json();
};

export const addProcedureToPlan = async (planId, procedureId) => {
  const url = `${api_url}/Plan/AddProcedureToPlan`;
  var command = { planId: planId, procedureId: procedureId };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });

  if (!response.ok) throw new Error("Failed to create plan");

  return true;
};

export const getProcedures = async () => {
  const url = `${api_url}/Procedures`;
  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) throw new Error("Failed to get procedures");

  return await response.json();
};

export const getPlanProcedures = async (planId) => {
  const url = `${api_url}/PlanProcedure?$filter=planId eq ${planId}&$expand=procedure($expand=planprocedureusers($filter=planId eq ${planId}))`;
  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) throw new Error("Failed to get plan procedures");

  return await response.json();
};

export const getUsers = async () => {
  const url = `${api_url}/Users`;
  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) throw new Error("Failed to get users");

  return await response.json();
};

export const addUserToProcedure = async (planId, procedureId, userIds) => {
  const url = `${api_url}/Procedures/AddUserToProcedure`;
  var command = { planId: planId, procedureId: procedureId, userIds: userIds };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });

  if (!response.ok) throw new Error("Failed to add user in procedure");

  return true;
};

export const deleteUsersFromProcedure = async (
  planId,
  procedureId,
  userIds
) => {
  const url = `${api_url}/Procedures/DeleteUsersFromProcedure`;
  var command = { planId: planId, procedureId: procedureId, userIds: userIds };
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
  });

  if (!response.ok) throw new Error("Failed to delete users from procedure");

  return true;
};

export const getPlanProcedureUsers = async (planId, procedureId) => {
  const url = `${api_url}/PlanProcedureUser?$filter=planId eq ${planId} and procedureId eq ${procedureId}&$expand=user`;
  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) throw new Error("Failed to get procedure users");

  return await response.json();
};
