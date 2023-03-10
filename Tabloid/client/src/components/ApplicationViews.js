import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import TagList from "./TagList";
import PostList from "./Posts/PostList";
import PostDetails from "./Posts/PostDetails";
import { UserList } from "./UserList";
import TagForm from "./TagForm";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">

          <Route
            index
            element={isLoggedIn ? <Hello /> : <Navigate to="/login" />}
          />
          <Route
            path="UserList"
            element={isLoggedIn ? <UserList /> : <Navigate to="/UserList" />}
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="tag" element={<TagList />} />
          <Route path="tagform" element={<TagForm />} />
          <Route path="post" element={<PostList />} />
          <Route path="post/:postId" element={<PostDetails />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};
