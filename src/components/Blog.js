import React from "react";

// All question ans
const Blog = () => {
  return (
    <div className="border border-indigo-600">
      <div className="m-4  border flex ">
        <div className="flex-1 p-2">
          {" "}
          <h1 className="text-4xl p-2"> 1)what is cors?</h1>
        </div>
        <div className="flex-1">
          <p>
            CORS is shorthand for Cross-Origin Resource Sharing. It is a
            mechanism to allow or restrict requested resources on a web server
            depend on where the HTTP request was initiated. This policy is used
            to secure a certain web server from access by other website or
            domain.
          </p>
        </div>
      </div>

      <div className="m-4 border flex p-2">
        <div className="flex-1 ">
          <h1 className="text-4xl">
            2)Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
        </div>
        <div className="flex-1">
          <p>
            Usually, authentication by a server entails the use of a user name
            and password. Other ways to authenticate can be through cards,
            retina scans, voice recognition, and fingerprints.
          </p>
          <p>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.
          </p>
        </div>
      </div>

      <div className="m-4 border flex p-2 ">
        {" "}
        <div className="flex-1 ">
          {" "}
          <h1 className="text-4xl">How does the private route work?</h1>
        </div>
        <div className="flex-1 ">
          <p>
            PrivateRoute component is the blueprint for all private routes in
            the application. If the user is logged in, go on and display the
            component in question; otherwise, redirect the user to sign-in page.
            Additionally, we can define the logic of isLogin utility function
            separately in utils folder.
          </p>
        </div>
      </div>

      <div className="m-4 border flex p-2">
        <div className="flex-1 ">
          {" "}
          <h1 className="text-4xl">What is Node? How does Node work?</h1>
        </div>
        <div className="flex-1 ">
          {" "}
          <p>
            Node.js is an open-source backend javascript runtime environment. It
            is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend. Node.js runs on chrome v8 engine which
            converts javascript code into machine code, it is highly scalable,
            lightweight, fast, and data-intensive.
          </p>
          <p>
            Node.js accepts the request from the clients and sends the response,
            while working with the request node.js handles them with a single
            thread. To operate I/O operations or requests node.js use the
            concept of threads. Thread is a sequence of instructions that the
            server needs to perform. It runs parallel on the server to provide
            the information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
