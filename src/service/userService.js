import users from '../assets/user-main-data.json'
import usersActivity from '../assets/user-activity.json'
import usersAverageSession from '../assets/user-average-session.json'
import usersPerformance from '../assets/user-performance.json'

export default class UserService {
  constructor(isMock) {
    this.isMock = isMock;
    this.data 
    this.error
  }

  async getUser(userId) {
    if (this.isMock) {
        return users.find(user => user.data.id == userId)
    }

    try {
        const response = await fetch(
            `http://localhost:3000/user/${userId}`
        )
        this.data = await response.json();
    } catch (error) {
        this.error = error
    }

    return [this.data, this.error]
  }

  async getUserActivity(userId) {
    if (this.isMock) {
        return usersActivity.find(user => user.id == userId);
    }

    try {
        const response = await fetch(
            `http://localhost:3000/user/${userId}/activity`
        )
        this.data = await response.json();
    } catch (error) {
        this.error = error
    }
  }

  async getUserAverageSession(userId) {
    if (this.isMock) {
        return usersAverageSession.find(user => user.id == userId);
    }

    try {
        const response = await fetch(
            `http://localhost:3000/user/${userId}/average-sessions`
        )
        this.data = await response.json();
    } catch (error) {
        this.error = error
    }
  }

  async getUserPerformance(userId) {
    if (this.isMock) {
        return usersPerformance.find(user => user.id == userId);
    }

    try {
        const response = await fetch(
        `http://localhost:3000/user/${userId}/performance`
        )
        this.data = await response.json();
    } catch (error) {
        this.error = error
    }
  }
}