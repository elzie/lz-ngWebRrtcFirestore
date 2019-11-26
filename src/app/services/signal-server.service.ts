import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class SignalServerService {
  personId;
  constructor(
    private db: AngularFirestore
  ) { }
  // In theory:
  // https://github.com/quangtqag/VideoChat/blob/master/Sources/Services/SignalingClient.swift
  // 1. deleteSdpAndCandidate(){}
  // 2. sendSDP
  // 3. sendCandidate
  // 4. listenSDP
  // 5. listenCandidate

  testSendToFirestore(data?) {
    const webRtcData = {
      sdp: 'sdp sdp sdp',
      candidate: 'candidate candidate ',
      channel: 'channelName'
    };
    console.log('** test Send to Firestore', webRtcData);
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection('signalServer')
        .add({
          id: 1,
          webRtcData
        })
        .then(res => {
          // copy ID to 'webRtcData' object
          this.db.collection('signalServer').doc(res.id).update({ id: res.id });
          this.personId = res.id;
          console.log(this.personId);
        }, err => reject(err));
    });
    // this works.
  }

  deleteSdpAndCandidate(data?, deleteId?) {
    console.log('** detele SDP and Candidate ');
    const person = 'lMTFpWV2tRj82ckByrnL'; // this.personId;
    // return this.db.collection('signalServer').doc(person).delete();

  }

  sendSDP(rtcSDP?) {
    console.log('** send SDP to Firestore ');
    const tempSDP = 'tempSDP';
    const dictSDP = JSON.stringify(tempSDP);
    const sdp = { sdp: dictSDP };
    //if 
  }

  updateSDP(data) {
    return this.db
      .collection('signalServer')
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  sendCandidate() {
    console.log('** send Candidate to Firestore ');
    const tempCandidate = 'tempCandidate';
    const dictCandidate = JSON.stringify(tempCandidate);
    const candidate = { candidate: dictCandidate };
    this.db.collection('signalServer').add(candidate).then(res => { }, err => reject(err));
  }

  listenSDP() {
    console.log('** listen to SDP from Firestore ');
    return this.db.collection('signalServer').doc('sdp').snapshotChanges();
  }

  listenCandidate() {
    console.log('** listen to Candidate from Firestore ');
    return this.db.collection('signalServer').doc('candidate').snapshotChanges();
  }

}
