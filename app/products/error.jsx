"use client";

const error = ({ error }) => {
  return (
    <div>
      <p className="text-5xl text-center my-5 font-semibold  font-mono ⚠️">
        {error?.message}
      </p>
    </div>
  );
};

export default error;
