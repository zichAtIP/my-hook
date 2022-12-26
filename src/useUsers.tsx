import { useEffect, useState } from "react";

export const useUsers = () => {
  return {users: [], loading: false, error: ""}
}