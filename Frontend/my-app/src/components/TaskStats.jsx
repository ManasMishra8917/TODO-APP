import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskStats = () => {
  const [stats, setStats] = useState({ yetToStart: 0, inProgress: 0, completed: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/tasks/stats', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setStats(response.data);
    };

    fetchStats();
  }, []);

  return (
    <div>
      <h3>Task Stats</h3>
      <p>Yet to Start: {stats.yetToStart}</p>
      <p>In Progress: {stats.inProgress}</p>
      <p>Completed: {stats.completed}</p>
    </div>
  );
};

export default TaskStats;
