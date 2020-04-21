import React, { Component } from 'react';
import { formatDistance } from 'date-fns';

import CallList from './CallList';
import Card from '../components/Card';
import ApiGatewayClient from '../ApiGatewayClient';

const POLL_TIMEOUT = 30000; // 30 secondes

type CallItem = {
  CustomerName: string;
  CreatedDate: string;
  CustomerId: string;
};

interface CallUpdatesState{
  items: CallItem[];
}
  
export class CallUpdates extends Component<{}, CallUpdatesState> {
  private pollTimeout: number;

  constructor(props = {}) {
    super(props);
    this.state = { items: [] }
    this.pollTimeout = 0;
  }

  async fetchCustomerCalls() {
    const response = await ApiGatewayClient.retriveCustomers();
    this.setState({ items: response });

    this.pollTimeout = window.setTimeout(() => this.fetchCustomerCalls(), POLL_TIMEOUT);
  }

  renderCalls() {
    const { items } = this.state;
    return items.map(({ CustomerName, CreatedDate, CustomerId }) => (
      <Card
        key={CustomerId}
        title={CustomerName}
        time={"(Waiting time: " + formatDistance(new Date(CreatedDate), new Date(), { includeSeconds: true }) + ")"}
      />
    ));
  };

  async handleCreateMeeting() {
    const firstCustomer = await ApiGatewayClient.getFirstCustomer();
    const meeting = firstCustomer && await ApiGatewayClient.createMeeting(firstCustomer.CustomerId);
    console.log("Created meeting", meeting);
    console.log("TODO: Need to initiate meeting session, set video/audio");
  }

  componentWillUnmount() {
    window.clearTimeout(this.pollTimeout);
  }
    
  componentDidMount() {
    // Poll to get customer calls every 30 sec
    this.fetchCustomerCalls();
  }

  render() {
    const { items } = this.state;
    const msg = (!items || !items.length) && "No incoming customer call"
    return (
      <div>
        <CallList
          title="Customer calls"
          defaultMessage={msg}
        >
          {items && items.length > 0 && this.renderCalls()}
          
        </CallList>
        <br />
        <button onClick={this.handleCreateMeeting}>Join next customer call</button>
      </div>
    );
  }
}

export default CallUpdates;
