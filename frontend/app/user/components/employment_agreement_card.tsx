import {
  currency,
  employmentAgreement,
  frequency,
  Status,
  terminationReasons,
} from "@/app/components/types";
import React from "react";

interface EmploymentAgreementCardProps {
  agreement: employmentAgreement;
}

const EmploymentAgreementCard: React.FC<EmploymentAgreementCardProps> = ({
  agreement,
}) => {
  const currencySymbol = (_currency: currency) => {
    switch (_currency) {
      case currency.USD:
        return "$";
      case currency.INR:
        return "₹";
      case currency.EUR:
        return "€";
      default:
        return "";
    }
  };

  const frequencyText = (_frequency: frequency) => {
    switch (_frequency) {
      case frequency.weekly:
        return "Weekly";
      case frequency.biweekly:
        return "Biweekly";
      case frequency.monthly:
        return "Monthly";
      case frequency.annualy:
        return "Annually";
      default:
        return "";
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="max-w-2xl mx-auto bg-cyan-400 shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Employment Agreement
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h3 className="font-bold text-gray-700">Agreement Details</h3>
            <p>
              <strong>Agreement ID:</strong> {agreement.agreementId}
            </p>
            <p>
              <strong>Contract Creator:</strong> {agreement.contractCreator}
            </p>
            <p>
              <strong>Status:</strong> {Status[agreement.status]}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-700">Contractor Details</h3>
            <p>
              <strong>Name:</strong> {agreement.contractor.name}
            </p>
            <p>
              <strong>Contact Address:</strong>{" "}
              {agreement.contractor.contact.address}
            </p>
            <p>
              <strong>Phone:</strong> {agreement.contractor.contact.phone}
            </p>
            <p>
              <strong>Email:</strong> {agreement.contractor.contact.email}
            </p>
            <p>
              <strong>Wallet:</strong> {agreement.contractor.wallet}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-700">Contractee Details</h3>
            <p>
              <strong>Name:</strong> {agreement.contractee.name}
            </p>
            <p>
              <strong>Contact Address:</strong>{" "}
              {agreement.contractee.contact.address}
            </p>
            <p>
              <strong>Phone:</strong> {agreement.contractee.contact.phone}
            </p>
            <p>
              <strong>Email:</strong> {agreement.contractee.contact.email}
            </p>
            <p>
              <strong>Wallet:</strong> {agreement.contractee.wallet}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-700">Position Details</h3>
            <p>
              <strong>Title:</strong> {agreement.position.title}
            </p>
            <p>
              <strong>Department:</strong> {agreement.position.department}
            </p>
            <p>
              <strong>Start Date:</strong> {agreement.position.startDate}
            </p>
            <p>
              <strong>End Date:</strong> {agreement.position.endDate}
            </p>
            <p>
              <strong>Full Time:</strong>{" "}
              {agreement.position.fulltime ? "Yes" : "No"}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-700">Compensation</h3>
            <p>
              <strong>Salary:</strong>{" "}
              {currencySymbol(agreement.compensation.salary.currency)}
              {agreement.compensation.salary.amount}
            </p>
            <p>
              <strong>Frequency:</strong>{" "}
              {frequencyText(agreement.compensation.salary.frequency)}
            </p>
            <p>
              <strong>Bonuses:</strong>{" "}
              {agreement.compensation.bonuses.eligibility
                ? "Eligible"
                : "Not Eligible"}
            </p>
            {agreement.compensation.bonuses.eligibility && (
              <>
                <p>
                  <strong>Bonus Details:</strong>{" "}
                  {agreement.compensation.bonuses.details}
                </p>
                <p>
                  <strong>Bonus Amount:</strong>{" "}
                  {agreement.compensation.bonuses.amount}
                </p>
              </>
            )}
            <p>
              <strong>Health Insurance:</strong>{" "}
              {agreement.compensation.benefits.healthInsurance ? "Yes" : "No"}
            </p>
            <p>
              <strong>Retirement Plan:</strong>{" "}
              {agreement.compensation.benefits.retirementPlan ? "Yes" : "No"}
            </p>
            <p>
              <strong>Paid Time Off:</strong>{" "}
              {agreement.compensation.benefits.paidTimeOff.days} days (
              {frequencyText(agreement.compensation.benefits.paidTimeOff.type)})
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-700">Responsibilities</h3>
            <ul className="list-disc list-inside">
              {agreement.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-700">Termination</h3>
            <p>
              <strong>Notice Period:</strong>{" "}
              {agreement.termination.noticePeriodDays} days
            </p>
            <p>
              <strong>Reason:</strong>{" "}
              {terminationReasons[agreement.termination.reason]}
            </p>
            <p>
              <strong>Contractor Signature:</strong>{" "}
              {agreement.termination.Signatures.contractor.name}
            </p>
            <p>
              <strong>Contractor Signature Date:</strong>{" "}
              {formatDate(
                agreement.termination.Signatures.contractor.timestamp
              )}
            </p>
            <p>
              <strong>Contractee Signature:</strong>{" "}
              {agreement.termination.Signatures.contractee.name}
            </p>
            <p>
              <strong>Contractee Signature Date:</strong>{" "}
              {formatDate(
                agreement.termination.Signatures.contractee.timestamp
              )}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-700">Signatures</h3>
            <p>
              <strong>Contractor Signature:</strong>{" "}
              {agreement.signatures.contractorSignature.name}
            </p>
            <p>
              <strong>Contractor Signature Date:</strong>{" "}
              {formatDate(agreement.signatures.contractorSignature.timestamp)}
            </p>
            <p>
              <strong>Contractee Signature:</strong>{" "}
              {agreement.signatures.contracteeSignature.name}
            </p>
            <p>
              <strong>Contractee Signature Date:</strong>{" "}
              {formatDate(agreement.signatures.contracteeSignature.timestamp)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmploymentAgreementCard;