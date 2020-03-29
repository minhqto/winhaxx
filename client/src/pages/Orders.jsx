import React from "react";

function Orders() {
  return (
    <div className="table-wrapper">
      <div className="table-row table-header">
        <div className="col-wrapper order-date-number-po">
          <div className="table-col order-date">Date</div>
          <div className="table-col order-number">Sales Order #</div>
        </div>

        <div className="col-wrapper order-year-model-customer">
          <div className="col-wrapper order-year-model">
            <div className="table-col order-year">Year</div>
            <div className="table-col order-model">Model</div>
          </div>
          <div className="table-col order-customer">Customer</div>
        </div>

        <div className="col-wrapper order-status-signed">
          <div className="table-col order-status">Status</div>
          <div className="table-col order-signed">Signed</div>
        </div>

        <div className="col-wrapper order-actions">
          <div className="table-col order-sign">Sign</div>
          <div className="table-col order-view">View</div>
        </div>
      </div>

      <div className="table-row">
        <div className="col-wrapper order-date-number-po">
          <div className="table-col order-date">12 March 2020</div>
          <div className="table-col order-number">SO-22204</div>
        </div>

        <div className="col-wrapper order-year-model-customer">
          <div className="col-wrapper order-year-model">
            <div className="table-col order-year">2020</div>
            <div className="table-col order-model">Toronto</div>
          </div>
          <div className="table-col order-customer">
            Willy Coyote & Road Runner
          </div>
        </div>

        <div className="col-wrapper order-status-signed">
          <div className="table-col order-status">Open</div>
          <div className="table-col order-signed">✅</div>
        </div>

        <div className="col-wrapper order-actions">
          <div className="table-col order-sign">Sign</div>
          <div className="table-col order-view">View</div>
        </div>
      </div>

      <div className="table-row">
        <div className="col-wrapper order-date-number-po">
          <div className="table-col order-date">12 March 2020</div>
          <div className="table-col order-number">SO-21905</div>
        </div>

        <div className="col-wrapper order-year-model-customer">
          <div className="col-wrapper order-year-model">
            <div className="table-col order-year">2020</div>
            <div className="table-col order-model">Toronto</div>
          </div>
          <div className="table-col order-customer">Jerry & Elaine</div>
        </div>

        <div className="col-wrapper order-status-signed">
          <div className="table-col order-status">Open</div>
          <div className="table-col order-signed">❌</div>
        </div>

        <div className="col-wrapper order-actions">
          <div className="table-col order-sign">Sign</div>
          <div className="table-col order-view">View</div>
        </div>
      </div>
      <div className="table-row">
        <div className="col-wrapper order-date-number-po">
          <div className="table-col order-date">12 March 2020</div>
          <div className="table-col order-number">SO-21907</div>
        </div>

        <div className="col-wrapper order-year-model-customer">
          <div className="col-wrapper order-year-model">
            <div className="table-col order-year">2020</div>
            <div className="table-col order-model">Windsor</div>
          </div>
          <div className="table-col order-customer">Jerry & Elaine</div>
        </div>

        <div className="col-wrapper order-status-signed">
          <div className="table-col order-status">Open</div>
          <div className="table-col order-signed">❌</div>
        </div>

        <div className="col-wrapper order-actions">
          <div className="table-col order-sign">Sign</div>
          <div className="table-col order-view">View</div>
        </div>
      </div>
      <div className="table-row">
        <div className="col-wrapper order-date-number-po">
          <div className="table-col order-date">12 March 2020</div>
          <div className="table-col order-number">SO-21904</div>
        </div>

        <div className="col-wrapper order-year-model-customer">
          <div className="col-wrapper order-year-model">
            <div className="table-col order-year">2020</div>
            <div className="table-col order-model">Windsor</div>
          </div>
          <div className="table-col order-customer">Jerry & Elaine</div>
        </div>

        <div className="col-wrapper order-status-signed">
          <div className="table-col order-status">Open</div>
          <div className="table-col order-signed">❌</div>
        </div>

        <div className="col-wrapper order-actions">
          <div className="table-col order-sign">Sign</div>
          <div className="table-col order-view">View</div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
