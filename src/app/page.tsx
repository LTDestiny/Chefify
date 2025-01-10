"use client";
import React, { useState, useCallback } from "react";

import { Route, Navigate, Routes } from "react-router-dom";
import MainNavigation from "@/app/shared/Navigation/MainNavigation";
import { AuthContext } from "@/app/shared/context/auth-context";
import HomePage from "@/app/pages/HomePage/HomePage";
import Auth from "@/app/user/pages/Auth";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const login = useCallback((uid: string) => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;
  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<div>Welcome Home</div>} />{" "}
        {/* Add route content */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    );
  }
  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <MainNavigation />
        <main>{routes}</main>
      </AuthContext.Provider>
    </>
  );
}
