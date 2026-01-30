import React from 'react';
let taskQueue = Promise.resolve();

const runner = (task) => {
  taskQueue = taskQueue.then(() => task());
};

const delay = (t) => new Promise((r) => setTimeout(r, t));

const Test = () => {
  const t1 = async () => {
    await delay(2000);

    console.log('t1');
  };

  const t2 = async () => {
    await delay(1000);

    console.log('t2');
  };

  const t3 = async () => {
    await delay(3000);

    console.log('t3');
  };
  runner(t1);
  runner(t2);
  runner(t3);

  return <div></div>;
};

export default Test;
