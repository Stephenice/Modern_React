import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

export default function App() {
  return (
    <>
      <div className="ui comments container">
        <h3 className="ui dividing header">Comments</h3>
        {/* reuseable component */}
        <ApprovalCard>
          <h1>Warning</h1>
          <p>Are you sure you want to do this?</p>
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            author="sam"
            timAgo="Today at 4:45pm"
            avatar={faker.image.avatar()}
            commentText="How artistic!"
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author="Alex"
            timAgo="Today at 1:45pm"
            avatar={faker.image.avatar()}
            commentText="How artistic!"
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author="Jane"
            timAgo="Today at 2:45pm"
            avatar={faker.image.avatar()}
            commentText="How artistic!"
          />
        </ApprovalCard>
      </div>
    </>
  );
}
